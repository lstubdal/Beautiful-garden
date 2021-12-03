<template>
	<div class="slideshow">
		<div class="slideshow__buttons">
			<button @click="previousImage" class="slideshow__button">
				<svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_72_80)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M41.9282 23.0113C41.9282 17.8945 39.8956 12.9873 36.2775 9.36924C32.6594 5.75114 27.7522 3.71851 22.6355 3.71851C17.5187 3.71851 12.6115 5.75114 8.99341 9.36924C5.37532 12.9873 3.34269 17.8945 3.34269 23.0113C3.34269 28.128 5.37532 33.0352 8.99341 36.6533C12.6115 40.2714 17.5187 42.304 22.6355 42.304C27.7522 42.304 32.6594 40.2714 36.2775 36.6533C39.8956 33.0352 41.9282 28.128 41.9282 23.0113ZM0.586582 23.0113C0.586582 17.1636 2.90958 11.5553 7.04455 7.42037C11.1795 3.2854 16.7877 0.962406 22.6355 0.962406C28.4832 0.962406 34.0914 3.2854 38.2264 7.42037C42.3613 11.5553 44.6843 17.1636 44.6843 23.0113C44.6843 28.859 42.3613 34.4672 38.2264 38.6022C34.0914 42.7372 28.4832 45.0602 22.6355 45.0602C16.7877 45.0602 11.1795 42.7372 7.04455 38.6022C2.90958 34.4672 0.586582 28.859 0.586582 23.0113ZM32.2818 24.3893C32.6473 24.3893 32.9978 24.2441 33.2563 23.9857C33.5147 23.7273 33.6599 23.3768 33.6599 23.0113C33.6599 22.6458 33.5147 22.2953 33.2563 22.0368C32.9978 21.7784 32.6473 21.6332 32.2818 21.6332H16.3157L22.2331 15.7186C22.3612 15.5905 22.4628 15.4384 22.5322 15.271C22.6015 15.1036 22.6372 14.9241 22.6372 14.743C22.6372 14.5618 22.6015 14.3823 22.5322 14.2149C22.4628 14.0475 22.3612 13.8954 22.2331 13.7673C22.1049 13.6392 21.9528 13.5375 21.7854 13.4682C21.618 13.3988 21.4386 13.3632 21.2574 13.3632C21.0762 13.3632 20.8968 13.3988 20.7294 13.4682C20.562 13.5375 20.4099 13.6392 20.2817 13.7673L12.0134 22.0356C11.8851 22.1636 11.7833 22.3157 11.7138 22.4831C11.6443 22.6505 11.6086 22.83 11.6086 23.0113C11.6086 23.1925 11.6443 23.372 11.7138 23.5394C11.7833 23.7069 11.8851 23.8589 12.0134 23.9869L20.2817 32.2553C20.4099 32.3834 20.562 32.485 20.7294 32.5544C20.8968 32.6237 21.0762 32.6594 21.2574 32.6594C21.4386 32.6594 21.618 32.6237 21.7854 32.5544C21.9528 32.485 22.1049 32.3834 22.2331 32.2553C22.3612 32.1271 22.4628 31.975 22.5322 31.8076C22.6015 31.6402 22.6372 31.4608 22.6372 31.2796C22.6372 31.0984 22.6015 30.919 22.5322 30.7516C22.4628 30.5842 22.3612 30.4321 22.2331 30.3039L16.3157 24.3893H32.2818Z" fill="black"/></g> <defs><clipPath id="clip0_72_80"><rect width="44.0977" height="44.0977" fill="white" transform="translate(44.6843 45.0602) rotate(-180)"/> </clipPath> </defs>
				</svg>
			</button>
			<button @click="nextImage" class="slideshow__button">
				<svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_72_77)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.98169 23.0113C2.98169 28.128 5.01432 33.0352 8.63241 36.6533C12.2505 40.2714 17.1577 42.304 22.2745 42.304C27.3912 42.304 32.2984 40.2714 35.9165 36.6533C39.5346 33.0352 41.5672 28.128 41.5672 23.0113C41.5672 17.8945 39.5346 12.9873 35.9165 9.36923C32.2984 5.75114 27.3912 3.71851 22.2745 3.71851C17.1577 3.71851 12.2505 5.75114 8.63241 9.36923C5.01432 12.9873 2.98169 17.8945 2.98169 23.0113ZM44.3233 23.0113C44.3233 28.859 42.0003 34.4672 37.8654 38.6022C33.7304 42.7371 28.1222 45.0601 22.2745 45.0601C16.4267 45.0601 10.8185 42.7371 6.68355 38.6022C2.54859 34.4672 0.225586 28.859 0.225586 23.0113C0.225586 17.1635 2.54859 11.5553 6.68355 7.42037C10.8185 3.2854 16.4267 0.962402 22.2745 0.962402C28.1222 0.962402 33.7304 3.2854 37.8654 7.42037C42.0003 11.5553 44.3233 17.1635 44.3233 23.0113ZM12.6281 21.6332C12.2626 21.6332 11.9121 21.7784 11.6536 22.0368C11.3952 22.2953 11.25 22.6458 11.25 23.0113C11.25 23.3768 11.3952 23.7273 11.6536 23.9857C11.9121 24.2441 12.2626 24.3893 12.6281 24.3893H28.5942L22.6768 30.3039C22.5487 30.4321 22.4471 30.5842 22.3777 30.7516C22.3084 30.919 22.2727 31.0984 22.2727 31.2796C22.2727 31.4608 22.3084 31.6402 22.3777 31.8076C22.4471 31.975 22.5487 32.1271 22.6768 32.2553C22.805 32.3834 22.9571 32.485 23.1245 32.5544C23.2919 32.6237 23.4713 32.6594 23.6525 32.6594C23.8337 32.6594 24.0131 32.6237 24.1805 32.5544C24.3479 32.485 24.5 32.3834 24.6282 32.2553L32.8965 23.9869C33.0248 23.8589 33.1267 23.7069 33.1961 23.5394C33.2656 23.372 33.3014 23.1925 33.3014 23.0113C33.3014 22.83 33.2656 22.6505 33.1961 22.4831C33.1267 22.3157 33.0248 22.1636 32.8965 22.0356L24.6282 13.7673C24.5 13.6392 24.3479 13.5375 24.1805 13.4682C24.0131 13.3988 23.8337 13.3632 23.6525 13.3632C23.4713 13.3632 23.2919 13.3988 23.1245 13.4682C22.9571 13.5375 22.805 13.6392 22.6768 13.7673C22.5487 13.8954 22.4471 14.0475 22.3777 14.2149C22.3084 14.3823 22.2727 14.5618 22.2727 14.7429C22.2727 14.9241 22.3084 15.1036 22.3777 15.271C22.4471 15.4384 22.5487 15.5905 22.6768 15.7186L28.5942 21.6332H12.6281Z" fill="black"/> </g> 
				<defs> <clipPath id="clip0_72_77"> <rect width="44.0977" height="44.0977" fill="white" transform="translate(0.225586 0.962402)"/> </clipPath> </defs>
				</svg>
			</button>
		</div>

		<div class="slideshow__extra">
			<button class="slideshow__button-caption" @click="showCaption =!showCaption">i</button>
		</div>

		<div class="slideshow__slides">
			<figure class="slideshow__slide">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
		</div>

		<div class="slideshow__dots">
			<button class="slideshow__dot" @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`"></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0, 
				showCaption: false,
				slides: [
					{ title: 'Sunflower', caption: 'Picture 1', file:  './assets/sunflower.jpg' },
					{ title: 'Aster', caption: 'Picture 2', file:  './assets/aster.jpg' },
					{ title: 'Daisy', caption: 'Picture 3', file:  './assets/daisy.jpg' },
					{ title: 'Peony', caption: 'Picture 4', file:  './assets/peony.jpg' },
					{ title: 'Rose', caption: 'Picture 5', file:  './assets/rose.jpg' },
					{ title: 'Tulip', caption: 'Picture 6', file:  './assets/tulip.jpg' },
				],
			};
		},
		
		computed: {
			currentSlide() {
				return this.slides[this.index];
			}
		},

		methods: {
			previousImage() {
				this.index = (this.index === 0) ? this.slides.length - 1 : this.index - 1;
			},

			nextImage() {
				this.index = (this.index === this.slides.length - 1) ? 0 : this.index + 1;
			},

			goToIndex(index) {
				this.index = index; 
			}
		}

	}
</script>

<style>
	.slideshow {
		background: #ecd0ff;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.slideshow__buttons {
		display: flex;
		justify-content: space-around;
		padding: 0.5em;
	}

	.slideshow:hover .slideshow__caption {
		opacity: 1;
	}

	.slideshow__button {
		background: none;
		border: none;
	}

	.slideshow__slides {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%; 
	}

	.slideshow__slide {
		position: absolute;
		width: 100%;
		height: 100%; 
	}

	.slideshow__img {
		width: 100%; 
		height: 100%;	
		object-fit: contain;
	}

	.slideshow__caption {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 0.75em;
		padding: 0.5em;
		background:#ddacfd;
	}

	.slideshow__extra {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.slideshow__button-caption {
		padding: 0.5em;
		color: #ddacfd;
	}

	.slideshow__buttons {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		display: flex;
		justify-content: space-between;
	}

	.slideshow__button {
		padding: 0.5em;
		align-self: center;
	}

	.slideshow__dots {
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		padding: 0.5em;
		width: 100%;
	}

	.slideshow__dot {
		--dot-size: 0.8em;
		min-width: var(--dot-size);
		min-height: var(--dot-size);
		display: block;
		background: #ddacfd;
		border-radius: 100%;
	}

	.slideshow__dot + .slideshow__dot {
		margin-left: 0.5em;
	}

	/* media query */ 
	
	@media screen and (max-width: 480px) {
		.slideshow {
			height: 60vh;
		}
	}
</style>