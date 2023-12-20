Vue.createApp({

    data() {
        return {
            vieJoueur1: 100,
            vieJoueur2: 100,
            round: 0,
            buttonDisabled: true,
        };
    },
    
    methods: {
        attackAdversaire() {
            this.vieJoueur2 -= 8;
            this.attackPlayer();
            this.round ++;
            if(this.round % 3 === 0) {
                this.isDisabled();
            }
        },

        attackPlayer() {
            this.vieJoueur1 -= 10;
        },

        attackMagique() {
            this.vieJoueur2 -= 13;
            this.vieJoueur1 -= 10;
            this.round += 1;
            this.buttonDisabled = !this.buttonDisabled;
        },

        isDisabled() {
            this.buttonDisabled = !this.buttonDisabled;
        },

        soignerJoueur1() {
            if(this.vieJoueur1 < 100) {
                this.vieJoueur1 += 11;
                this.attackPlayer();
                this.round += 1;    
            }
        },

        soignerJoueur2() {
            if(this.vieJoueur2 < 100) {
                this.vieJoueur2 += 9 - 8;
                this.round += 1;    
            }
        }

    }
}).mount('#app');
