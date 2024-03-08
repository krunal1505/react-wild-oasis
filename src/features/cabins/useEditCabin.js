import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin updated successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    // eslint-disable-next-line no-unused-vars
    onError: (err) => {
      toast.error("Error editing cabin");
      // console.error(err);
    },
  });

  return { isEditing, editCabin };
}
