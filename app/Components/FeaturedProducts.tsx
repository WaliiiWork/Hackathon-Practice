import ShopCards from "./ui/ShopCards"

const FeaturedProducts = () => {
  return (
    <div className="featured my-20">
        <div className="container flex gap-5 max-lg:flex-wrap justify-center items-center">
            <ShopCards containerWidth="50" imgWidth={600} productDescription="Discover and mix & match playful patterns, bold stripes, refreshing florals, and more." btnText="20% OFF Duvet Cover Sets NEW" imgHeight={500} imgSource="/Images/explore-1.png" />
            <ShopCards containerWidth="50" imgWidth={600} btnText="20% OFF Sheet Sets NEW" productDescription="Limited edition designs made by independent artists in limited quantities." imgHeight={500} imgSource="/Images/explore-2.png" />
        </div>
    </div>
  )
}

export default FeaturedProducts