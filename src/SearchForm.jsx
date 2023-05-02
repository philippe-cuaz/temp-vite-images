import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);

    // my-app-udemy-react-course app:
    // Access Key:
    // c9LwTkHJk5KSTAFKmEPPwtjkHAOOk2hYOXREEnRxo6Q
    // Secret key:
    // -_LfkuXBLVPtaCJWNig2S9GsAkoxef-R9EakehliI5U

    // let redirecturi = "urn:ietf:wg:oauth:2.0:oob";
    // Authorization: Client-ID YOUR_ACCESS_KEY
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    // Search Images app:
    // Access Key:
    // Di8rxhIK6TCO5ivDiH2PAVAQpLdgech9U1F7lQs_FOU
    // Secret key:
    // PKopatAlyKwn7PZB0sZS-Y9_x3eE5lhEVvCunKG8qY8

    // GET /search/photos
    // query	Search terms.
    // page	Page number to retrieve. (Optional; default: 1)
    // <https://api.unsplash.com/search/photos?page=3&query=office>
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
