function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-evenly gap-3">
      <input type="text" placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded py-2 px-4" />
    </div>
  )
}

export default Searchbar;