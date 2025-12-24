import { PiUserPlus, PiUsersThree } from "react-icons/pi";
import QuestionCard from "../../../../base/QuestionCard";
import Button from "../../../../base/inputs/Button";
import TablemateAccordion from "./TablemateAccordion";
import Intro from "../../../../base/Intro";
import { FaRegSquareCheck } from "react-icons/fa6";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import {
  TablematesForm,
  tablematesFormSchema,
} from "../../../../schemas/tablemates-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { addTablemates } from "../../../../http/tablemates";
import { toast } from "sonner";
import handleAxiosError from "../../../../api/error-handling";
import { useNavigate } from "react-router-dom";

const Tablemates = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: { tablemates: [] },
    resolver: zodResolver(tablematesFormSchema),
  });

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tablemates",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addTablemates,
    onSuccess: () => {
      toast.success("مرحله ثبت همسفره‌ها با موفقیت به پایان رسید");
      navigate("/game-workflow");
    },
    onError: (error) => {
      toast.error(handleAxiosError(error).message);
    },
  });

  const onAddAccordionHandler = () => {
    if (fields.length >= 10) {
      toast.error("شما می‌توانید حداکثر ۱۰ همسفر به لیست خود اضافه کنید");
      return;
    }
    append({
      name: "",
      sharedMealsCount: 0,
      relationshipLevel: "",
      influenceLevel: "",
    });
  };

  const onAddTablematesHandler: SubmitHandler<TablematesForm> = (data) => {
    mutate(data);
  };

  return (
    <>
      <Intro
        headingTitle="همسفره‌های خود را مشخص کنید"
        title="افرادی که معمولا با آنها غذا میخورید."
      />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onAddTablematesHandler)}
          noValidate
          className="flex flex-col gap-10 mt-12 xs:w-auto xs:mx-4 sm:w-11/12 sm:mx-auto md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
        >
          <QuestionCard icon={<PiUsersThree />} label="همسفره‌ها">
            <div className="w-full h-auto space-y-4">
              {fields.length === 0 && (
                <div className="w-full h-auto border-2 border-dashed border-gray-300 rounded-xl text-center py-20">
                  <Button
                    classes="btn btn-outline !border !rounded-xl xxs:!text-xs md:!text-sm lg:!text-base !py-1 !font-medium"
                    type="button"
                    title="افزودن همسفره"
                    icon={<PiUserPlus strokeWidth={1} />}
                    iconClasses="text-5xl"
                    itemsGap={10}
                    iconFirst={true}
                    onClick={onAddAccordionHandler}
                  />
                </div>
              )}
              {fields.length > 0 &&
                fields.map((field, index) => (
                  <TablemateAccordion
                    key={field.id}
                    index={index}
                    isOpen={fields.length === index + 1}
                    tablematesNumber={index + 1}
                    onRemoveClick={() => remove(index)}
                  />
                ))}
              {fields.length >= 1 && (
                <Button
                  classes="w-full btn btn-outline !border !rounded-xl xxs:!text-xs md:!text-sm lg:!text-base !py-1 !font-medium"
                  type="button"
                  title="افزودن همسفره"
                  icon={<PiUserPlus strokeWidth={1} />}
                  iconClasses="text-2xl"
                  iconFirst={true}
                  itemsGap={10}
                  onClick={onAddAccordionHandler}
                  disable={isPending}
                />
              )}
            </div>
          </QuestionCard>
          <Button
            classes="btn btn-primary !rounded-2xl"
            title={`${isPending ? "در حال ارسال..." : "ارسال همسفره‌ها"}`}
            icon={!isPending ? <FaRegSquareCheck /> : undefined}
            iconClasses="text-xl"
            itemsGap={12}
            disable={isPending}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default Tablemates;
