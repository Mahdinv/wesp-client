import { useNavigate } from "react-router-dom";
import Button from "../../../base/inputs/Button";
import { toPersianDigits } from "../../../utils/public";

const StartGame = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 bg-white xs:w-auto xs:mx-4 sm:w-[90%] md:w-9/12 xl:w-1/3 h-auto rounded-lg shadow-xl p-12 sm:mx-auto mt-14 border-2 border-secondary">
      <h4 className="text-center">چرا این بازی را انجام می‌دهیم؟</h4>
      <div className="text-justify">
        <p>
          هدف ما این است که به شما کمک کنیم خودتان را بهتر بشناسید.به‌ویژه در
          زمینه رفتارها و نگرش‌هایی که بر انتخاب و مصرف غذای شما تاثیر
          می‌گذارند.
        </p>
        <p>
          این بازی به‌گونه‌ای طراحی شده است که در عین سرگرم‌کننده بودن، به شما
          نشان دهد چگونه عادت‌های غذایی‌تان شکل می‌گیرد و چه عواملی بر آن‌ها اثر
          دارند.
        </p>
        <p>
          نتایج این بازی به هوش‌مصنوعی ما کمک می‌کند تا بر اساس ویژگی‌های فرهنگی
          و رفتاری شما، پیشنهادهایی شخصی‌سازی شده برای بهبود رژیم‌غذایی از منظر
          اقتصادی، سلامتی و پایداری محیط‌زیست ارائه دهد.
        </p>
      </div>
      <small className="text-center font-bold">
        زمان بازی حدودا {toPersianDigits(10)} دقیقه
      </small>
      <Button
        classes="btn btn-primary !rounded-md"
        title="شروع کن"
        onClick={() => navigate("/questionnaire")}
      />
    </div>
  );
};

export default StartGame;
