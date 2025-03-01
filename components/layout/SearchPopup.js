
export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup-wrap ${isPopup ? "search-active" : ""}`}>
                <div className="search-popup">
                    <button className="close-search style-two"><span className="flaticon-multiply" onClick={handlePopup}></span></button>
                    <button className="close-search" onClick={handlePopup}><span className="flaticon-up-arrow-1"></span></button>
                    <form>
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search Here" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>                
            </div>

        </>
    )
}
