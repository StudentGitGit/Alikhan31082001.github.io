def can_visit_all_rooms(rooms):
    keys = set([0])
    stack = [0]
    
    while stack:
        room = stack.pop()
        room_keys = set(rooms[room])
        keys |= room_keys
        stack.extend(room_keys - keys)
        
    return len(keys) == len(rooms)

rooms = [[1,3],[3,0,1],[2],[0]]
print(can_visit_all_rooms(rooms))