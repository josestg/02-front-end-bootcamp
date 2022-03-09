const users = [
  {
    id: 1,
    name: "Bob",
    job: "Backend Engineer",
    bio: "Bob Bio",
    url: "https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg",
  },
  {
    id: 2,
    name: "Alice",
    job: "Frontend Engineer",
    bio: "Alic Bio",
    url: "https://www.brand-her.com/wp-content/uploads/2014/02/team2.jpg",
  },
  {
    id: 3,
    name: "Evan",
    job: "Fullstack Engineer",
    bio: "Evan Bio",
    url: "https://www.brand-her.com/wp-content/uploads/2014/02/team3.jpg",
  },
  {
    id: 4,
    name: "Eve",
    job: "Data Scientist",
    bio: "Eve Bio",
    url: "https://www.brand-her.com/wp-content/uploads/2014/02/team4.jpg",
  },
];

export function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 3 * 1000);
  });
}
