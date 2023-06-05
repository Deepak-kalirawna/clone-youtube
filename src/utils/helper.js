export function filterData(searchText, postsList) {
  return postsList.filter((post) =>
    post?.title.toLowerCase().includes(searchText.toLowerCase())
  );
}
