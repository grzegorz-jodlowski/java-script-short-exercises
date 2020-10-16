
const images = {
  treasure: "💰",
  leafs: "🍃",
  tree: "🌲"
};

const trees = document.querySelectorAll(".tree");
const button = document.querySelector(".button");
const indexOfRandomTree = Math.floor(Math.random() * trees.length);

const sound = new Howl({
  src: ['http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a']
});

const { treasure, leafs, tree } = images;

const findTreasure = event => {
  if (event.target.classList.contains("treasure")) {
    sound.play();
    trees.forEach(tree => {
      tree.textContent = leafs;
      tree.removeEventListener("mouseover", findTreasure);
      tree.removeEventListener("mouseleave", hideTreasure);
    });
    event.target.textContent = treasure;
    button.classList.toggle("show");
  } else {
    event.target.textContent = leafs;
  }
};
const hideTreasure = event => {
  event.target.textContent = tree;
};

trees.forEach((tree, index) => {
  if (index === indexOfRandomTree) {
    tree.classList.add("treasure");
  }
  tree.addEventListener("mouseover", findTreasure);
  tree.addEventListener("mouseleave", hideTreasure);
});

button.addEventListener("click", () => location.reload());
