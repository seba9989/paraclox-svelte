<script lang="ts">
	import { db } from '$lib/firebase';
	import { collectionStore } from 'sveltefire';
	import { setPlayerStore } from '$lib/ts/PlayerStore';

	const characterList = collectionStore<{ id: string; CharacterID: string }>(db, 'CharacterList');

	$: console.log($characterList);

	let currentCharacter = {
		name: '',
		characterID: ''
	};

	$: if ($characterList[0] !== undefined) {
		currentCharacter = {
			name: $characterList[0].id,
			characterID: $characterList[0].CharacterID
		}
	}
</script>

{#if currentCharacter.name }
	<main>
		<div class="characterList">
			{#each $characterList as character}
				<button class="characterIcon" on:click={() => (currentCharacter.name = character.id)}>
					<img
						src="/UI/character-icons/{character.id === currentCharacter.name
							? 'active'
							: 'not-active'}/{character.id}.png"
						alt={character.id}
					/>
				</button>
			{/each}
		</div>

		<div class="characterDescription">
			<div class="characterImg">
				<img src="/characters/{currentCharacter.name}/idle.gif" alt={currentCharacter.name} />
			</div>

			<button on:click={() => setPlayerStore()}>Start</button>
		</div>
	</main>
{/if}

<style lang="scss">
	@use '$lib/style/mixins.scss';

	main {
		height: 100%;
		display: flex;
		background-image: url('/battle-screen/backgrounds/postapo-green-day.png');
		background-position: center top;
		background-color: #212121;
		background-repeat: repeat no-repeat;
		background-size: 90%;

		.characterList {
			@include mixins.BorderStyle(right);

			width: 125px;

			display: flex;
			flex-direction: column;
			justify-content: space-between;

			padding: 10px;

			background: #212121;

			.characterIcon {
				width: 100%;
				aspect-ratio: 535 / 635;

				padding: 0;

				background: none;
				border: none;
			}
		}

		.characterDescription {
			width: 100%;

			display: flex;

			backdrop-filter: blur(5px) brightness(50%);

			.characterImg {
				height: 75%;
				aspect-ratio: 1/2;

				margin: auto 50px;

				display: flex;
				justify-content: center;

				overflow: hidden;
			}

			button {
				margin: auto;
				background: #212121;

				@include mixins.BorderStyle();

				padding: 10px 20px;
				font-size: 1.5rem;
			}
		}
	}
</style>
