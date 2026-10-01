
import DetailsSlider from "@/app/_sharedComponent/DetailsSlider/DetailsSlider";
import { getDetails } from "@/services/ProductDetails";
import { FaStar } from "react-icons/fa";
import AddBtn from "../../../_sharedComponent/AddBtn/AddBtn";
import { getAllProductReview } from "@/services/Reviews/GetProductReview.service";
import AddBtnWhislist from "@/app/_sharedComponent/AddBtn/AddBtnWhislist";
import { IReview } from "../../../../interface/Review.interface";
import CreateReview from "../../../_sharedComponent/Review/CreateReview";

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await getDetails(id);
  const reviews = await getAllProductReview(id)
  


  

  
  return (
    <div className="min-h-screen bg-white py-8 mt-10 md:mt-25">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          <div className="md:col-span-5">
            <DetailsSlider imgList={data?.images} />
          </div>

          <div className="md:col-span-7 flex flex-col justify-between border border-gray-100 rounded-2xl p-6 md:p-8 bg-white shadow-xs">

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-emerald-50 text-emerald-600 text-xs px-3 py-1 rounded-md font-medium">
                  {data.category.name}
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md font-medium">
                  {data.brand.name}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {data.title}
              </h1>

              <div className="flex items-center gap-1.5 mb-4 text-sm">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(data.ratingsAverage || 4) ? "text-yellow-400" : "text-gray-300"} size={14} />
                  ))}
                </div>
                <span className="text-gray-600 font-medium ml-1">
                  {data.ratingsAverage || 4} ({data.ratingsQuantity || 40} reviews)
                </span>
              </div>

              <div className="text-3xl font-black text-gray-900 mb-3">
                {data.price} EGP
              </div>


              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {data.description}
              </p>





              <div className="flex items-center justify-between py-3 mb-6  border-t border-gray-100">
                <span className="text-sm font-medium text-gray-600">Total Price:</span>
                <span className="text-xl font-bold text-emerald-600">{(data.price).toFixed(2)} EGP</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 px-2 pt-4 border-t border-gray-100 text-sm text-gray-600">
                <div>
                  <AddBtn productId={data?._id} />

                </div>
                <div className="flex items-center gap-3 ">
                  <AddBtnWhislist productId={data?._id} /> Add to Whishlist

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Reviews Section */}
        <div className="mt-12 border-t border-gray-100 pt-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Customer Reviews
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Share your experience with this product
              </p>
            </div>
            {/* Rating Summary */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-gray-900">
                  {data.ratingsAverage || 0}
                </span>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={13}
                      className={
                        star <= Math.round(data.ratingsAverage || 0)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {data.ratingsQuantity || 0} Reviews
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Customer feedback
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Latest Reviews
                </h3>

              </div>
              <div className="space-y-4">
                {reviews?.data?.slice(0, 3).map((review: IReview) => (
                  <div
                    key={review._id}
                    className="border border-gray-100 rounded-2xl p-5 bg-white hover:border-gray-200 transition"
                  >
                    {/* User Info */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold uppercase">
                          {review.user.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">
                            {review.user.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex gap-0.5 pt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={13}
                            className={
                              star <= review.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    {/* Review Text */}
                    <p className="text-sm text-gray-600 leading-relaxed mt-4">
                      {review.review}
                    </p>
                  </div>
                ))}
                {/* No Reviews */}
                {(!reviews?.data || reviews.data.length === 0) && (
                  <div className="border border-dashed border-gray-200 rounded-2xl py-10 text-center">
                    <p className="text-sm text-gray-500">
                      No reviews yet.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Be the first one to review this product.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Add Review */}
            <div className="lg:col-span-1">
              <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
                <h3 className="text-lg font-semibold text-gray-900">
                  Write a Review
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">
                  Tell us what you think about this product.
                </p>
             <CreateReview productId={id}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}