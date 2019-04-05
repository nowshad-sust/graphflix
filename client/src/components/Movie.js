import React from "react";

const playIcon = (
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG1SURBVGiB7dnPKwRhHMfx76BQRJETuVFSkpNcuLg5uq6/AEeOjq7+hT26Kg5KSZuLUhxc5ERRRIlaWm+HZ5+ydnd2fn93pnmd5/B5r2nnmSWSy+VyfwHbQLf2jtAw7oGC9pZQqHUCTGtvCoR638AeMKC9zZcGIdYzsAl0aG/0xCXEugDmtXe25CEE4AcoAiPae5vyGGK9Vm+3Lu3ddXyGWDfAsvb2GgFDrANgXLtBREKHAHwAO0BP2kOsW2A1CyHWMTCVhRCAL8zpoD/tIdYDUACctIdYp8BMFkIAKpjTwXDaQ6wXzOmg08s+z/ckQPCPIZRLEVl3HKfkdlEajt6zInIG7ANjzS5KQ4iIuXNc74j2O53WOxeRDcdxLtwuaue/yJOIrInIQqsIXxL8tioDu8BgZOMVQo6AyVgCEgq5A1ZiDYg55BPzjtKbSERMIUVgNLGAGEKugaXEAyIMeaMdflkJEVDBvDwNqQZYASNKwJz29ho+Ax5J6o3PL48BZczXaZ/23qY8RBwCE9o7W3IJSO6pHIUGAe/AFkk+laPwL0LnqRyFasAVsKi9JRSy8u/pXC6Xbr9ssHrlxy2T1wAAAABJRU5ErkJggg==" />
);

const Movie = ({ id, title, genre, year, images, setSelectedMovie }) => (
  <div
    className="list-content movie"
    style={images && { backgroundImage: `url(${images[0]})` }}
  >
    <div className="movie-content">
      <p className="title">
        <b>{title}</b>
      </p>
      <p className="year"> {year} </p>
      <a onClick={() => setSelectedMovie(id)}>{playIcon}</a>
      <p className="genre">{genre}</p>
    </div>
  </div>
);

export default Movie;
