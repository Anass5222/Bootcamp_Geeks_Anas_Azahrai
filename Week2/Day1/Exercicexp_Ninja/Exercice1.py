import tkinter as tk
from collections import Counter


# =====================================================================
#  CLASSE UNIVERS
#  - haut et bas : bordures fixes
#  - gauche et droite : ouvertes, une forme qui arrive au bord continue
#    sa route et disparait en sortant de la grille
# =====================================================================
class Universe:
    MARGIN = 8     # colonnes gardees hors de la grille (au-dela, c'est oublie)

    def __init__(self, rows, cols, live_cells=()):
        self.rows, self.cols = rows, cols
        self.live = {c for c in live_cells if self.allowed(*c)}
        self.generation = 0
        self.movers = []

    def allowed(self, r, c):
        return 0 <= r < self.rows and -self.MARGIN <= c < self.cols + self.MARGIN

    def on_screen(self, r, c):
        return 0 <= r < self.rows and 0 <= c < self.cols

    def visible(self):
        return [(r, c) for r, c in self.live if self.on_screen(r, c)]

    def next_generation(self):
        counts = Counter(
            (r + dr, c + dc)
            for r, c in self.live
            for dr in (-1, 0, 1)
            for dc in (-1, 0, 1)
            if (dr or dc) and self.allowed(r + dr, c + dc)
        )
        self.live = {
            cell for cell, n in counts.items()
            if n == 3 or (n == 2 and cell in self.live)
        }
        self.generation += 1

    # ---------- sortie des formes qui restent ----------
    def objects(self):
        """Regroupe les cellules visibles en formes (cellules qui se touchent)."""
        todo, groups = set(self.visible()), []
        while todo:
            stack = [todo.pop()]
            group = set(stack)
            while stack:
                r, c = stack.pop()
                for dr in (-1, 0, 1):
                    for dc in (-1, 0, 1):
                        n = (r + dr, c + dc)
                        if n in todo:
                            todo.discard(n)
                            group.add(n)
                            stack.append(n)
            groups.append(group)
        return groups

    def start_exit(self):
        """Chaque forme choisit la bordure la plus proche (gauche ou droite)."""
        self.movers = []
        for group in self.objects():
            centre = sum(c for _, c in group) / len(group)
            self.movers.append([group, -1 if centre < self.cols / 2 else 1])
        self.live = set().union(*[g for g, _ in self.movers]) if self.movers else set()

    def life_step(self, cells):
        """Une generation du jeu appliquee a une seule forme."""
        counts = Counter(
            (r + dr, c + dc)
            for r, c in cells
            for dr in (-1, 0, 1)
            for dc in (-1, 0, 1)
            if (dr or dc) and self.allowed(r + dr, c + dc)
        )
        return {
            cell for cell, n in counts.items()
            if n == 3 or (n == 2 and cell in cells)
        }

    def exit_step(self):
        """Le mouvement continue : chaque forme evolue (regles du jeu) ET avance
        d'une colonne vers sa bordure, jusqu'a traverser la derniere colonne."""
        for m in self.movers:
            cells, dx = m
            evolved = self.life_step(cells)
            if not evolved:          # une forme ne s'eteint jamais avant le bord
                evolved = cells
            m[0] = {(r, c + dx) for r, c in evolved if -self.MARGIN <= c + dx < self.cols + self.MARGIN}
        self.live = set().union(*[g for g, _ in self.movers]) if self.movers else set()
        self.generation += 1


# =====================================================================
#  ETAT INITIAL releve sur la video : 3 formes empilees AU MILIEU
# =====================================================================
SHIP = [                                  # forme du haut et du bas
    (0, 1),
    (1, 0),
    (2, 0), (2, 4),
    (3, 0), (3, 1), (3, 2), (3, 3),
]
MIDDLE = [                                # forme du milieu
    (0, 2),
    (1, 0), (1, 1),
    (2, 0),
    (3, 0),
    (4, 1),
]


def place(pattern, row, col):
    return [(r + row, c + col) for r, c in pattern]


def start_cells():
    return (
        place(SHIP, 3, 22)         # en haut
        + place(MIDDLE, 10, 24)    # au milieu
        + place(SHIP, 17, 22)      # en bas
    )


# =====================================================================
#  JEU GRAPHIQUE : tourne en boucle
# =====================================================================
class GraphicalGame:
    def __init__(self, rows=22, cols=44, cell=16, delay=100,
                 pause_ms=1000, exit_generation=60):
        self.rows, self.cols, self.cell = rows, cols, cell
        self.delay, self.pause_ms = delay, pause_ms
        self.exit_generation = exit_generation
        self.cycle = 1
        self.new_universe()

        self.root = tk.Tk()
        self.root.title("Conway's Game of Life")
        self.label = tk.Label(self.root, font=("Arial", 12))
        self.label.pack(pady=4)
        self.canvas = tk.Canvas(
            self.root, width=cols * cell, height=rows * cell,
            bg="white", highlightthickness=0,
        )
        self.canvas.pack(padx=10, pady=10)

    def new_universe(self):
        self.universe = Universe(self.rows, self.cols, start_cells())
        self.seen = set()

    def draw(self):
        k, u = self.cell, self.universe
        self.canvas.delete("all")
        for r in range(self.rows + 1):
            self.canvas.create_line(0, r * k, self.cols * k, r * k, fill="#ddd")
        for c in range(self.cols + 1):
            self.canvas.create_line(c * k, 0, c * k, self.rows * k, fill="#ddd")
        for r, c in u.visible():
            self.canvas.create_rectangle(
                c * k + 1, r * k + 1, (c + 1) * k - 1, (r + 1) * k - 1,
                fill="#222", outline="",
            )
        self.label.config(
            text=f"Cycle {self.cycle}  |  Generation {u.generation}  |  visibles : {len(u.visible())}"
        )

    def finished(self):
        """Moment ou les formes se separent vers la gauche et la droite."""
        u = self.universe
        state = frozenset(u.live)
        if state in self.seen or u.generation >= self.exit_generation:
            return True
        self.seen.add(state)
        return False

    def step(self):
        self.draw()
        if not self.universe.visible():
            self.root.after(self.pause_ms, self.restart)    # tout a disparu : 1 seconde
            return
        if self.finished():
            self.universe.start_exit()                       # le mouvement continue, sans arret,
            self.root.after(self.delay, self.exit_step)      # vers la gauche ou la droite
            return
        self.universe.next_generation()
        self.root.after(self.delay, self.step)

    def exit_step(self):
        self.universe.exit_step()
        self.draw()
        if self.universe.visible():
            self.root.after(self.delay, self.exit_step)
        else:
            self.root.after(self.pause_ms, self.restart)    # 1 seconde, puis retour au milieu

    def restart(self):
        self.cycle += 1
        self.new_universe()
        self.step()

    def run(self):
        self.step()
        self.root.mainloop()


if __name__ == "__main__":
    GraphicalGame(rows=22, cols=44, cell=16, delay=100, pause_ms=1000).run()