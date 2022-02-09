import BookmarkIcon from '@mui/icons-material/Bookmark';
import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <BookmarkIcon/>
            <h1>Todo List App</h1>
          </div> 
        </div>
      </nav>
    </div>
  );
}
