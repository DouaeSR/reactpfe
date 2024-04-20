import Aside from "../../components/aside";
import '../../css/SignUp.css'

function Profile() {
    return (
      <main>
       <div class="signup-container">
        <h2>Sign Up</h2>
        <form action="#" method="POST">
            <div class="input-group">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required/>
            </div>
            <div class="input-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required/>
            </div>
            <div class="input-group">
               
                <label for="gender">Gender</label>
                <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    
                </select>
            </div>
            <div class="input-group">
                <label for="birthday">Birthday</label>
                <input type="date" id="birthday" name="birthday" required/>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="log.html">Log in</a></p>
    </div>
      </main>
     
    );
  }
  
  export default Profile;
  