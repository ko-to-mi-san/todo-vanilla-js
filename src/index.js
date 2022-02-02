import sheet from "./styles.css" assert { type: 'css' };

document.adoptedStyleSheets = [sheet];

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-string";
  p.innerText = text;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

    // TODO内容の取得
    const addTarget = div.parentNode;
    const text = p.innerText;

    addTarget.textContent = null;

    const div2 = document.createElement("div");
    div2.className = "list-row";

    const p2 = document.createElement("p");
    p2.className = "todo-string";
    p2.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      document.getElementById("complete-list").removeChild(div2.parentNode);

      const text = p2.innerText;
      createIncompleteList(text);
    })

    div2.appendChild(p2);
    div2.appendChild(backButton);
    addTarget.appendChild(div2);

    document.getElementById("complete-list").appendChild(addTarget);

  });
// 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());