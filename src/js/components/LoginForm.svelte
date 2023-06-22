<script>
    import { getParam } from "../utils.mjs"
    let userName = ""; 
    let password = "";
    let creds = {userName, password}
    
    const param = getParam(window.location,"redirect")
    console.log(param)

    function handleLogin(e){
        login(creds, param)
    }

</script>
<form>
    <label for="userName">Username:*</label><br>
    <input type="text" name="userName" id="userName" required bind:value={userName}><br>
    <label for="password">Password:*</label><br>
    <input type="text" name="password" id="password" required bind:value={password}><br>
    <button type="button" on:click={handleLogin}>Log in</button>
</form>