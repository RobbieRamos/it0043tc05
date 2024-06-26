document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flex-container');
    const boxes = document.querySelectorAll('.box');

    document.getElementById('reset').addEventListener('click', () => {
        container.style.flexDirection = 'row';
        container.style.justifyContent = 'flex-start';
        container.style.alignItems = 'stretch';
        container.style.gap = '0px';
        boxes.forEach(box => box.style.flexGrow = 0);
        document.getElementById('gap').value = 0;
        document.getElementById('grow1').value = 0;
        document.getElementById('grow2').value = 0;
        document.getElementById('grow3').value = 0;
    });

    document.querySelectorAll('.flex-direction').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.direction === 'row') {
                container.style.flexDirection = 'row';
            } else if (button.dataset.direction === 'column') {
                container.style.flexDirection = 'column';
            } else if (button.dataset.direction === 'row-reverse') {
                container.style.flexDirection = 'row-reverse';
            } else if (button.dataset.direction === 'column-reverse') {
                container.style.flexDirection = 'column-reverse';
            }
        });
    });

    document.querySelectorAll('.justify-content').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.justify === 'flex-start') {
                container.style.justifyContent = 'flex-start';
            } else if (button.dataset.justify === 'flex-end') {
                container.style.justifyContent = 'flex-end';
            } else if (button.dataset.justify === 'center') {
                container.style.justifyContent = 'center';
            } else if (button.dataset.justify === 'space-between') {
                container.style.justifyContent = 'space-between';
            } else if (button.dataset.justify === 'space-around') {
                container.style.justifyContent = 'space-around';
            } else if (button.dataset.justify === 'space-evenly') {
                container.style.justifyContent = 'space-evenly';
            }
        });
    });

    document.querySelectorAll('.align-items').forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.align === 'stretch') {
                container.style.alignItems = 'stretch';
            } else if (button.dataset.align === 'flex-start') {
                container.style.alignItems = 'flex-start';
            } else if (button.dataset.align === 'flex-end') {
                container.style.alignItems = 'flex-end';
            } else if (button.dataset.align === 'center') {
                container.style.alignItems = 'center';
            } else if (button.dataset.align === 'baseline') {
                container.style.alignItems = 'baseline';
            }
        });
    });

    document.getElementById('gap').addEventListener('input', (event) => {
        container.style.gap = `${event.target.value}px`;
    });

    document.getElementById('grow-all').addEventListener('click', () => {
        boxes.forEach(box => box.style.flexGrow = 1);
        document.getElementById('grow1').value = 1;
        document.getElementById('grow2').value = 1;
        document.getElementById('grow3').value = 1;
    });

    document.getElementById('reset-grow').addEventListener('click', () => {
        boxes.forEach(box => box.style.flexGrow = 0);
        document.getElementById('grow1').value = 0;
        document.getElementById('grow2').value = 0;
        document.getElementById('grow3').value = 0;
    });

    document.getElementById('grow1').addEventListener('input', (event) => {
        boxes[0].style.flexGrow = event.target.value;
    });

    document.getElementById('grow2').addEventListener('input', (event) => {
        boxes[1].style.flexGrow = event.target.value;
    });

    document.getElementById('grow3').addEventListener('input', (event) => {
        boxes[2].style.flexGrow = event.target.value;
    });
});
