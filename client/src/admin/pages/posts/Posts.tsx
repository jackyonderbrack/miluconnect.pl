import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import jsonPosts from './posts.json';

const Posts = () => {
  return (
    <div className="posts-page flex flex-col gap-2">
      <Header title="Wpisy" />
      <div className="button-wrapper">
        <Button linkTo={"/admin-panel/post/new"} buttonText={"+ Nowy wpis"} theme={"btn-primary"} />
      </div>
      <List
        items={jsonPosts}
        itemsPerPage={6}
        renderItem={(item) => (
          <>
            <h3 className="post-title">{item.title}</h3>
            <div className="post-meta">
              <span>{item.author} - {item.date}</span>
              <span>{item.category}</span>
              <span>{item.tags.join(', ')}</span>
            </div>
            <p className="post-content">{item.content}</p>
          </>
        )}
      />
    </div>
  );
}

export default Posts;
