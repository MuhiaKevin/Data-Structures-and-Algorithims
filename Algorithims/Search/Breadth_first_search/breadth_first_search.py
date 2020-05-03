from collections import deque


## https://www.geeksforgeeks.org/applications-of-breadth-first-traversal/

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["alice"] = ["peggy"]
graph["bob"] = ["anuj", "peggy"]
graph["claire"] = ["thom", "johnny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thon"] = []
graph["johnny"] = []


def bfs():

    # creates a queue
    search_queue = deque()
    # add my friends to the queue

    search_queue += graph["you"]
    # a list to mark people as searched
    searched = []

    # while there is still queue
    while search_queue:
        # pop the first element to get the person in this case alice
        person = search_queue.popleft()
        print(f"Checking if {person} is mango seller\n")

        # if person is not searched then check if friend is not a seller
        if person not in searched:
            if person_is_seller(person):
                print(f"{person} +  is a mango seller\n")
                return True
            else:
                print(f"{person} is not a mango seller\n")
                print(
                    f"Adding {person}'s friends {graph[person]} who could be mango sellers\n")
                print(f"=========================")

                # if person is not a mango seller then add him/her to searched list
                search_queue.append(person)
                # get friends of your friends to search if any of them is a mango seller
                search_queue += graph[person]

    # if there is no seller in the list return False
    return False

# checks if the last letter of the name is equal to m


def person_is_seller(name):
    return name[-1] == 'm'


bfs()
