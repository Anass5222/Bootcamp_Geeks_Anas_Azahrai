class Pagination:
    def __init__(self, items=None, page_size=10):
        """Initializes the pagination system with items and page size."""
        # Handle default None for items
        self.items = items if items is not None else []
        self.page_size = int(page_size)
        self.current_idx = 0
        
        # Calculate the total number of pages
        if not self.items:
            self.total_pages = 0
        else:
            self.total_pages = (len(self.items) + self.page_size - 1) // self.page_size

    def get_visible_items(self):
        """Returns the list of items visible on the current page using slicing."""
        if self.total_pages == 0:
            return []
        
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        
        page_num = int(page_num)  
        
        if 1 <= page_num <= self.total_pages:
            self.current_idx = page_num - 1  
        else:
            print(f"The Page {page_num} is out of range. Valid pages: 1 to {self.total_pages}.")

    def first_page(self):
        
        self.current_idx = 0
        return self

    def last_page(self):
        
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
    
        if self.current_idx > 0:
            self.current_idx -= 1
        return self
    

    def display_current_page(self):
        
        visible_items = self.get_visible_items()
        return "\n".join(str(item) for item in visible_items)


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())


p.next_page()
print(p.get_visible_items())


p.last_page()
print(p.get_visible_items())


p.go_to_page(7)
print(p.current_idx + 1)


p.go_to_page(0)


     
      




