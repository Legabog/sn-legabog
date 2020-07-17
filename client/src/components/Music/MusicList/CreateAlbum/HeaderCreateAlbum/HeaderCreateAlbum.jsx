import React from "react";
import classes from "./HeaderCreateAlbum.module.css";
import { NavLink } from "react-router-dom";
import AddPhoto from "../../../../../assets/apple theme/photo_add.png";
import DefaultPhoto from "../../../../../assets/apple theme/music.jpg";
import firebase from "firebase/app";
import "firebase/storage";

class HeaderCreateAlbum extends React.Component {
  componentDidMount() {
  }

  state = {
    imgAvatar: AddPhoto,
    img: DefaultPhoto,
    nameImg: "",
    name: "",
    description: "",
  };

  onChangeHandlerInput1 = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeHandlerInput2 = (e) => {
    this.setState({ description: e.target.value });
  };

  handleImageUpload = (img) => {
    this.setState({ img });
  };

  base64Encode = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => this.handleImageUpload(reader.result);
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  sendImage = (img) => {
    this.setState({ nameImg: img });
    this.base64Encode(img);
    this.setState({
      img: window.URL.createObjectURL(img),
      imgAvatar: window.URL.createObjectURL(img),
    });
  };

  render() {
    return (
      <div className={classes.headerCreateAlbum}>
        <NavLink to="/music-list/playlists">
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>Cancel</h3>
          </div>
        </NavLink>

        <NavLink to="/music-list/playlists">
          <div
            className={classes.buttonDone}
            onClick={() => {
              if (this.state.img === DefaultPhoto) {
                this.props.addToPlayList({
                  title: this.state.name + "",
                  description: this.state.description + "",
                  playlistcoverUrl: `https://firebasestorage.googleapis.com/v0/b/covers-storage.appspot.com/o/covers-playlists%2Fmusic.jpg?alt=media&token=db800deb-7496-4b40-b57d-df2168e69fd6`,

                  tracks: [],
                });
              } else {
                //----------Firebase

                var storage = firebase.storage();
                var storageRef = storage.ref();
                var imagesRef = storageRef.child(
                  `covers-playlists/${this.state.nameImg.name}`
                );
                imagesRef
                  .putString(this.state.img + "", "data_url")
                  .then(function (snapshot) {
                    console.log("Uploaded a data_url string!");
                  })
                  .then(() => {
                    //--------------Post reducer to MongoDB
                    this.props.addToPlayList({
                      title: this.state.name + "",
                      description: this.state.description + "",
                      playlistcoverUrl: `https://firebasestorage.googleapis.com/v0/b/covers-storage.appspot.com/o/covers-playlists%2F${this.state.nameImg.name}?alt=media&token=a0652844-6b70-495d-8dcd-a70dd5272ad8`,

                      tracks: [],
                    });
                  });
                //----------------------
              }
            }}
          >
            <h3>Done</h3>
          </div>
        </NavLink>

        <h1>Create new playlist</h1>
        <div className={classes.inputs}>
          <div className={classes.addPhoto}>
            <label htmlFor="image-loader">
              <img src={this.state.imgAvatar} alt="description" />
            </label>

            <input
              type="file"
              id="image-loader"
              accept="image/x-png, image/gif, image/jpeg, image/jpg"
              onChange={(e) => {
                this.sendImage(e.target.files[0]);
              }}
            ></input>
          </div>
          <div className={classes.inputs2}>
            <div>
              <input
                className={classes.input1}
                onChange={this.onChangeHandlerInput1}
                inputvalue={this.state.input1}
                placeholder="New playlist name"
              ></input>
            </div>
            <div>
              <input
                className={classes.input2}
                onChange={this.onChangeHandlerInput2}
                inputvalue={this.state.input2}
                placeholder="Description"
              ></input>
            </div>
          </div>
        </div>
        <div className={classes.lastBlock}></div>
      </div>
    );
  }
}

export default HeaderCreateAlbum;
