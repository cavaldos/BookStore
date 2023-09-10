const Header: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <a href="#" className="text-3xl font-bold">
                BookWorm
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm">
                Home
              </a>
              <a href="#" className="text-sm">
                Categories
              </a>
              <a href="#" className="text-sm">
                New Arrival
              </a>
              <a href="#" className="text-sm">
                Discount
              </a>
              <a href="#" className="text-sm">
                Blog
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
