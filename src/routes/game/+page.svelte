<script lang="ts">
	import Battle from '$lib/components/Game/Battle/Battle.svelte';
	import ChooseCharacter from '$lib/components/Game/ChooseCharacter/ChooseCharacter.svelte';
	import { gameService } from '$lib/ts/gameService';
</script>

{#if $gameService.value === 'characterSelect'}
	<ChooseCharacter />
{:else if $gameService.value === 'battle'}
	<Battle />
{/if}
