new Vue({
    el: '#app',
    data() {
        return {
            images: ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'],
            currentIndex: 0
        };
    },
    methods: {
        showImage(index) {
            this.currentIndex = index;

            // Auto play logic
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = setInterval(this.autoPlay, 3000);
        },
        prevImage() {
            const previousIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.showImage(previousIndex);
        },
        nextImage() {
            const nextIndex = (this.currentIndex + 1) % this.images.length;
            this.showImage(nextIndex);
        },
        autoPlay() {
            const nextIndex = (this.currentIndex + 1) % this.images.length;
            this.showImage(nextIndex);
        }
    },
    mounted() {
        // Auto play on mount
        this.autoplayInterval = setInterval(this.autoPlay, 3000);
    }
});