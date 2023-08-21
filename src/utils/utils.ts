const log = (...args: any[]) => (console.log(...args), args);

const appendApp = (...nodes: Node[]) => {
  const $app = document.getElementById("app");
  nodes.forEach((node) => {
    $app?.appendChild(node);
  });
};

const withInfo =
  (title: string, description: string) => (setup: () => void) => {
    const $title = document.createElement("h2");
    const $description = document.createElement("p");

    $title.textContent = title;
    $description.textContent = description;

    appendApp($title, $description);

    return setup;
  };
