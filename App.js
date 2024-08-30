/*
<div class="parent">
<div class="child">
<h1>hellow theree</h1>
</div>
</div>
*/

const parent = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement(
      "h1",
      { class: "heading" },
      "this is  chid fisrt heading h1"
    ),
    React.createElement(
      "h2",
      { class: "heading" },
      "this is  chid Second heading h2"
    ),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement(
      "h1",
      { class: "heading" },
      "this is  chid fisrt heading h1"
    ),
    React.createElement(
      "h2",
      { class: "heading" },
      "this is  chid Second heading h2"
    ),
  ])
]);

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "hellow world form React"
);

//here we are creating
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
