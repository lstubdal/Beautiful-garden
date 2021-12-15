<template>
	<div class="slideshow">
		<div class="slideshow__buttons">
			<button @click="previousImage" class="slideshow__button">
				<img src="img/previous.svg" alt="previous button"/>
			</button>
			<button @click="nextImage" class="slideshow__button">
				<img src="img/next.svg" alt="next button"/>
			</button>
		</div>

		<div class="slideshow__information">
			<button class="slideshow__button-caption" @click="showCaption =!showCaption">
				<img src="img/information.svg" alt="information button"/>
			</button>
		</div>

		<div class="slideshow__slides">
			<figure class="slideshow__slide">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
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
					{ title: 'Sunflower', caption: 'Sunflower', file:  '/slideshow/sunflower.jpg' },
					{ title: 'Aster', caption: 'Aster', file:  '/slideshow/aster.jpg' },
					{ title: 'Daisy', caption: 'Daisy', file:  '/slideshow/daisy.jpg' },
					{ title: 'Peony', caption: 'Peony', file:  '/slideshow/peony.jpg' },
					{ title: 'Rose', caption: 'Rose', file:  '/slideshow/rose.jpg' },
					{ title: 'Tulip', caption: 'Tulip', file:  '/public/slideshow/tulip.jpg' },
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
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	} 

	.slideshow__slide {
		position: absolute;
		width: 100%;
		height: 100%; 
	}

	.slideshow__img {
		width: 100%; 
		height: 100%;	
		object-fit: cover;
	}

	.slideshow__caption {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 1em;
		padding: 0.5em;
		background:#ecd0ff;
	}

	.slideshow__information {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.slideshow__button-caption img {
		width: 65%;
		height: 65%;
		border: none;
		color: black;
		background: none;
		margin-left: 0.1em;
		margin-top: 0.4em;
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

	/* media query */ 
	
	@media screen and (max-width: 800px) {
		.slideshow {
			height: 60vh;
		}

		.slideshow__slide--mobile {
		position: relative; 
	}
	}
</style>