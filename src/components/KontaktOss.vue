<template>
	<div class="contact-form">
		<h2 class="contact-form__title">help from flower experts</h2>
		<input class="contact-form__input" type="text" placeholder="FirstName" v-model="form.firstName" />
		<input class="contact-form__input" type="text" placeholder="LastName" v-model="form.lastName" />
		<input class="contact-form__input" type="email" placeholder="E-mail" v-model="form.email" />

		<!-- <label :for="`vg-input-${index}`" v-for="(vgClass, index) in content.vgClasses">
			<div>{{ vgClass }}</div>
			<input :id="`vg-input-${index}`" name="vg" type="radio" v-model="form.vg" :value="vgClass" />
		</label>

		<label :for="`sizes-input-${index}`" v-for="(size, index) in content.sizes">
			<div>{{ size }}</div>
			<input :id="`sizes-input-${index}`" name="sizes" type="checkbox" v-model="form.sizes" :value="size" />
		</label> -->

		<input class="contact-form__input-message" type="textarea" placeholder="How can we help you?" v-model="form.message" />

		<button class="contact-form__button" @click="submit_form">Submit</button>
	</div> 
</template>

<script>
	export default {
		data() {
			return {
				form: {
					firstName: null,
					lastName: null,
					email: null,
					message: null,
					vg: null,
					sizes: [],
				},

				content: {
					vgClasses: ['VG1', 'VG2', 'VG3'],
					sizes: ['S', 'M', 'L', 'XL'],
				},
			};
		},

		methods: {
			submit_form() {
				alert(`Thank you, ${this.name}!`);
			},
		},
	};
</script>

<style>
	.contact-form {
		padding: 1em;
		background: #FFDBB0;
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
	}

	.contact-form__title {
		font-size: 1.1em;
		font-family: var(--component-headline);
		font-weight: bold;
		margin-bottom: -3%;
	}

	.contact-form__input {
		height: 10%;
		border: none;
		border-radius: 10px;
		margin: 0.5em 1em 0.5em 1em;
	}

	.contact-form__input-message {
		height: 40%;
		border: none;
		border-radius: 10px;
		margin: 0.5em 1em 0.5em 1em;
	}

	.contact-form__button {
		width: 20%;
		display: flex;
		justify-content: center;
		align-self: center;
	}
</style>