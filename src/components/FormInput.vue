<template>
		<form class="contact-form__input">	
			<div class="contact-form__fullName">
				<input class="contact-form__firstName" type="text" placeholder="First name" v-model="form.firstName" />
				<input class="contact-form__lastName" type="text" placeholder="Last name" v-model="form.lastName" />
			</div>
			<input class="contact-form__email" type="email" placeholder="E-mail" v-model="form.email" />
			<textarea class="contact-form__message" type="textarea" cols="1" placeholder="What do you need help with?" v-model="form.message" />
		</form>
</template>

<script>
	export default {
		props: {
			input: String,
		},
	}
</script>

<style>
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
</style>
