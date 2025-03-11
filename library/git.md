# git

- Git is a version control system that tracks the content of the files in the director
  where git was initialised.

- git has different stages

  - working
  - staged
  - commited

- git stores the content in a very interesting way, that is it factories the
  problem into parts

  - storing of content
    - compress it and creates a hash code that is like a unique id for that content.
    - It stores it in the form of hash objects.
  - storing the relationship between the fiel and content
    - git creates tree object where the information regarding the permissions,
      blob object, and the conserning file name will be stored.
  - storing the whole info as a histiorical event
    - When a commit is made git creates a commit object which refres to the
      tree of that snapshot and the parent of that commit which is the previous commit.

- git merging
  - again an interesting process which merges the content in some branch with the current
    branch.
