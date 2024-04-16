import firebase from "firebase/compat/app";
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const {updateProfile} = UseAuth();
    const handleUpdateProfile = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            user.updateProfile({
                displayName: 'New Display Name',
                photoURL: 'https://example.com/new-profile-photo.jpg'
            }).then(() => {
                // Profile updated successfully
                console.log("Profile updated successfully");
            }).catch((error) => {
                // An error occurred while updating the profile
                console.error("Error updating profile: ", error);
            });
        }
    };
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>UpdateProfile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h3>Update your profile</h3>
            <button onClick={handleUpdateProfile}>Update Profile</button>



        </div>
    );
};

export default UpdateProfile;