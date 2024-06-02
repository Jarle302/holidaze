import { useEffect } from "react";
import { toast } from "react-toastify";

export default function useToast(state: any, router?: any, path?: string) {
  useEffect(() => {
    console.log(state);
    if (state?.statusCode > 299) {
      toast.error(
        state?.errors
          .map((error: { message: string }) => error.message)
          .join(", ")
      );
    }
    if (state?.data && Object.keys(state?.data).length > 0) {
      toast("Success!");
      router && router.push(path);
    }
  }, [state]);
}
