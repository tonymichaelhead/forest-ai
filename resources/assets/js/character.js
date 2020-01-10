// Define Player object 
class Character {
    constructor(name, health, items, money) {
        this.name = name;
        this.health = health;
        this.items = items;
        this.money = money;
    }

    removeHealth(hp) {
        this.health -= hp;
    }

    isAlive() {
        return this.health > 0;
    }

    addToItems(item) {
        this.items.push(item);
    }

    updateStats() {   
        $statsHealth.text(this.health);
        $('#health').val(this.health);
        
        let itemString = '';
        this.items.forEach((item, i) => {
            itemString += item.ele;
        });
        
        $statsItems.html(itemString);
        $statsMoney.text(this.money);
    }
}

export default Character;