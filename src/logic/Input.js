export default class Input{
    constructor(manager){
        this.manager= manager;
        this.addKeyListener();
    }

    addKeyListener() {
        document.addEventListener('keydown', (event) => {
            switch (event.key.toLowerCase()) {
                case 'w':
                    this.manager.move(1);
                    break;
                case 's':
                    this.manager.move(2);
                    break;
                case 'a':
                    this.manager.move(3);
                    break;
                case 'd':
                    this.manager.move(4);
                    break;
            }
        });
    }
}