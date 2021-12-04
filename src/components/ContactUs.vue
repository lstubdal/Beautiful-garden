<template>
	<div class="contact-form">
		<h2 class="contact-form__title">help from flower experts</h2>
		
		<form class="contact-form__input">
			<div class="contact-form__error">
				<p>{{ error }}</p>
				<p class="contact-form__error">{{ firstNameValidation }}</p>
				<p class="contact-form__error">{{ lastNameValidation }}</p>
				<p class="contact-form__error">{{ emailValidation }}</p>
				<p class="contact-form__error">{{ messageValidation }}</p>
			</div>
			<!-- <label for="name">Name</label> -->
			<div class="contact-form__fullName">
				<input class="contact-form__firstName" type="text" placeholder="First name" v-model="form.firstName" />
				
				<input class="contact-form__lastName" type="text" placeholder="Last name" v-model="form.lastName" />
			</div>
			<!-- <label for="email">E-mail</label> -->
			<input class="contact-form__email" type="email" placeholder="E-mail" v-model="form.email" />
			<!-- <label for="message">Message</label> -->
			<textarea class="contact-form__message" type="textarea" cols="1" placeholder="What do you need help with?" v-model="form.message" />
		</form>
		<button class="contact-form__button" @click.prevent="validateForm">Ask!</button>
	</div> 	
</template>

<script>
	export default {
		data() {
			return {
				form: {
					firstName: '',
					lastName: '',
					email: '',
					message: '',
				},
				error: '',	
			};
		},

		methods: {
			validateForm() {
				if (this.form.firstName.length && this.form.lastName.length && this.form.email.length && this.form.message.length  ) {							// if 0, this form did not pass validation 
					return this.error = 'Form sent!';				// if greater than 0, validation passed and form sent
					// alert(`Thank you for contacting us, ${this.form.firstName}. We'll get back to you as soon as possible!`);
				}
				return this.error = 'Invalid form.';
			},
		},

		computed: {
			firstNameValidation: function () {
				if ( ! this.form.firstName.length && this.error) {
					alert('First name is required');
				}
			},
			lastNameValidation: function () {
				if ( ! this.form.lastName.length && this.error) {
					alert('Last name is required');
				}
			},
			emailValidation: function () {
				if ( ! this.form.email.length && this.error) {
					alert('E-mail is required');
				}
			},
			messageValidation: function () {
				if ( ! this.form.message.length && this.error) {
					alert('Message is required');
				}
			},
		},
	};
</script>

<style>
	.contact-form {
		background: #FFDBB0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.contact-form__title {
		padding-top: 0.2em;
		font-size: 1.1em;
		font-family: var(--main-font);
		font-weight: bold;
		align-self: center;
	}

	.contact-form__input input {
		position: relative;
		display: flex;
		flex-direction: column;
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		width: 100%;
	}

	.contact-form__error {
		position: relative;
		color: darkred;
	}

	.contact-form__firstName {
		margin-right: 0.5em;
	}

	.contact-form__fullName {
		display: flex; 
		align-items: center;
	}

	.contact-form__message {
		font-family: var(--main-font);
		resize: none;
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		height: 60%;
		width: 100%;
	}

	.contact-form__button {
		width: 20%;
		height: 8%;
		align-self: center;
		border: none; 
		border-radius: 10px; 
		cursor: pointer;
		background-color: var(--light);
		margin-top: 1em;
	}

	.contact-form__button:hover {
		box-shadow: orange 0 0.5em 0.5em -0.5em;
	}
	/* media query */ 
	
	@media screen and (max-width: 480px) {
		.contact-form {
			height: 60vh;
		}
	}
</style>



// https://vuejs.org/v2/cookbook/form-validation.html
