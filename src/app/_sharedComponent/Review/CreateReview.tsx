"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICreateReview } from "@/interface/createReview";
import { toast } from "@/components/ui/toast";
import {Controller, useForm } from "react-hook-form";
import { createReviewSchema } from "@/Schema/createreview.schema";
import { CreateReviewProduct } from "@/services/Reviews/CreateReview.service";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export default function CreateReview({ productId }: { productId: string }) {
  const [selectedRating, setSelectedRating] = useState(0);
const router = useRouter()
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      review: "",
      rating: 0,
    },
  });


  async function handleCreateReview(values: ICreateReview) {
    try {
      const response = await CreateReviewProduct({
        productId: productId, 
        payload: values
      });
      if (response.data) {
        toast.add({
          description: "Review added successfully",
        });
        reset();
        setSelectedRating(0);
        router.refresh()
      } else {
        toast.add({
          description: response?.errors?.msg  || "Failed to add review",
        });
      }
    } catch (error) {
      toast.add({
        description: "Please login first",
      });
    }
  }
  return (
    <div>
           {/* Rating */}
                <form onSubmit={handleSubmit(handleCreateReview)}>

                  {/* Rating */}

                  <Controller

                    name="rating"

                    control={control}

                    render={({ field }) => (

                      <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">

                          Your Rating

                        </label>

                        <div className="flex gap-1">

                          {[1, 2, 3, 4, 5].map((star) => (

                            <button

                              key={star}

                              type="button"

                              onClick={() => {

                                setSelectedRating(star);

                                field.onChange(star);

                              }}

                              className="transition hover:scale-110"

                            >

                              <FaStar

                                size={22}

                                className={

                                  star <= selectedRating

                                    ? "text-yellow-400"

                                    : "text-gray-300"

                                }

                              />

                            </button>

                          ))}

                        </div>

                        {errors.rating && (

                          <p className="text-xs text-red-500 mt-2">

                            {errors.rating.message}

                          </p>

                        )}

                      </div>

                    )}

                  />

                  {/* Review */}

                  <Controller

                    name="review"

                    control={control}

                    render={({ field }) => (

                      <div className="mb-5">

                        <label

                          htmlFor="review"

                          className="block text-sm font-medium text-gray-700 mb-2"

                        >

                          Your Review

                        </label>

                        <textarea

                          {...field}

                          id="review"

                          rows={5}

                          placeholder="Write your review here..."

                          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"

                        />

                        {errors.review && (

                          <p className="text-xs text-red-500 mt-2">

                            {errors.review.message}

                          </p>

                        )}

                      </div>

                    )}

                  />

                  {/* Submit */}

                  <button

                    type="submit"

                    disabled={isSubmitting}

                    className="w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"

                  >

                    {isSubmitting ? "Submitting..." : "Submit Review"}

                  </button>

                </form>

    </div>
  )
}
