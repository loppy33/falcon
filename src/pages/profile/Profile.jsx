import './Profile.sass'

export default function Profile() {
  
  return (
    <div className="Profile">
      <div className="pageContainer">
        <div className="profileContainer">
          <div className="avatar">
            <img src='./avatar.svg' alt="" />
            <p>Click on the avatar to upload an image</p>
            <h2>User1234</h2>
          </div>
          <form>
            <h3>Basic information</h3>


            <label htmlFor="name">Login</label>
            <input type="text" value={"User1234"} />

            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="name">Name</label>
            <input type="text" />

            <button>Save</button>
          </form>
        </div>

      </div>
    </div>
  );
}
