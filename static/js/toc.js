document.addEventListener('DOMContentLoaded', function () {
  const tocContainers = document.querySelectorAll('[data-toc-for]');

  tocContainers.forEach(function (container) {
    const targetId = container.getAttribute('data-toc-for');
    const target = document.getElementById(targetId);
    if (!target) return;

    const headings = target.querySelectorAll('h2, h3, h4');
    if (headings.length === 0) return;

    const root = document.createElement('ul');
    const stack = [root];

    headings.forEach(function (heading) {
      const level = parseInt(heading.tagName[1], 10);
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      li.appendChild(a);

      while (stack.length > level - 1) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      parent.appendChild(li);

      const childUl = document.createElement('ul');
      li.appendChild(childUl);
      stack.push(childUl);
    });

    root.querySelectorAll('ul:empty').forEach(function (empty) {
      empty.remove();
    });

    container.innerHTML = '';
    container.appendChild(root);
  });
});
