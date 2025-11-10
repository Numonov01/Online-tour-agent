// src/components/Welcome.tsx
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;

interface ScheduleItem {
  time: string;
  activity: string;
  cost_usd: number;
}

interface DailyPlan {
  day: number;
  date: string;
  schedule: ScheduleItem[];
  total_cost_day_usd: number;
}

interface TripSummary {
  month: string;
  duration_days: number;
  group_numbers: number;
  group_type: string;
  estimated_total_cost_usd: number;
}

interface ApiResponse {
  status: string;
  result: {
    trip_summary: TripSummary;
    daily_plan: DailyPlan[];
    total_hotel_cost_day_usd_for_all_members: number;
    notes: string;
  };
}

interface UserInput {
  age: string;
  group_type: string;
  budget_usd: string;
  days: string;
  month: string;
  people_count: string;
  is_disabled: boolean;
}

const Welcome = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    age: "",
    group_type: "",
    budget_usd: "",
    days: "",
    month: "",
    people_count: "",
    is_disabled: false,
  });

  const [searchResult, setSearchResult] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const groupTypes = [
    { value: "solo", label: "Yakka" },
    { value: "couple", label: "Juftlik" },
    { value: "family", label: "Oila" },
    { value: "friends", label: "Do'stlar" },
    { value: "business", label: "Biznes" },
  ];

  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Backendga yuboriladigan ma'lumotlarni tayyorlash
      const requestData = {
        age: parseInt(userInput.age) || 30,
        group_type: userInput.group_type || "family",
        budget_usd: parseInt(userInput.budget_usd) || 500,
        days: parseInt(userInput.days) || 3,
        month: userInput.month || "Noyabr",
        group_numbers: parseInt(userInput.people_count) || 2,
        is_disabled: userInput.is_disabled || false,
      };

      console.log("Backendga yuborilayotgan ma'lumot:", requestData);

      // Backend API ga so'rov yuborish
      const response = await axios.post<ApiResponse>(
        `${API_BASE_URL}travel/`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 30000, // 30 soniya timeout
        }
      );

      console.log("Backenddan kelgan javob:", response.data);

      if (response.data.status === "success") {
        setSearchResult(response.data);
      } else {
        setError("Serverdan xato qaytdi");
      }
    } catch (err) {
      console.error("API so'rovi xatosi:", err);
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(
            `Server xatosi: ${err.response.status} - ${err.response.data}`
          );
        } else if (err.request) {
          setError(
            "Serverga ulanib bo'lmadi. Iltimos, internet aloqasini tekshiring."
          );
        } else {
          setError(`So'rov yuborishda xato: ${err.message}`);
        }
      } else {
        setError("Noma'lum xato yuz berdi");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    field: keyof UserInput,
    value: string | boolean
  ) => {
    setUserInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Shaxsiy sayohat rejalashtiruvchi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O'zingiz haqingizda ma'lumot bering, biz siz uchun mukammal sayohat
            marshrutini yaratamiz
          </p>
        </div>

        {/* Qidiruv Formasi */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yosh
                </label>
                <input
                  type="number"
                  value={userInput.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  placeholder="Yoshingizni kiriting"
                  min="18"
                  max="100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guruh turi
                </label>
                <select
                  value={userInput.group_type}
                  onChange={(e) =>
                    handleInputChange("group_type", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  required
                >
                  <option value="">Guruh turini tanlang</option>
                  {groupTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Odamlar soni
                </label>
                <input
                  type="number"
                  value={userInput.people_count}
                  onChange={(e) =>
                    handleInputChange("people_count", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  placeholder="Nechi kishi"
                  min="1"
                  max="20"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Byudjet (USD)
                </label>
                <input
                  type="number"
                  value={userInput.budget_usd}
                  onChange={(e) =>
                    handleInputChange("budget_usd", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  placeholder="Umumiy byudjet"
                  min="0"
                  required
                />
                {userInput.people_count &&
                  parseInt(userInput.people_count) > 1 &&
                  userInput.budget_usd && (
                    <p className="text-xs text-gray-500 mt-1">
                      Kishi boshiga: $
                      {Math.floor(
                        parseInt(userInput.budget_usd) /
                          parseInt(userInput.people_count)
                      )}
                    </p>
                  )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kunlar soni
                </label>
                <input
                  type="number"
                  value={userInput.days}
                  onChange={(e) => handleInputChange("days", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  placeholder="Kunlar soni"
                  min="1"
                  max="7"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sayohat oyi
                </label>
                <select
                  value={userInput.month}
                  onChange={(e) => handleInputChange("month", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                  required
                >
                  <option value="">Oyni tanlang</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="is_disabled"
                  checked={userInput.is_disabled}
                  onChange={(e) =>
                    handleInputChange("is_disabled", e.target.checked)
                  }
                  className="w-4 h-4 text-[#F9C80E] border-gray-300 rounded focus:ring-[#F9C80E]"
                />
                <label htmlFor="is_disabled" className="text-sm text-gray-700">
                  Cheklangan harakatchanlikni hisobga olish
                </label>
              </div>
            </div>

            {/* Xato xabari */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Qidiruv Tugmasi */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F9C80E] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#E0A800] transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Yuklanmoqda..." : "Sayohat marshrutini yaratish"}
              </button>
            </div>
          </form>
        </div>

        {/* Yuklash holati */}
        {loading && (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F9C80E] mx-auto"></div>
            <p className="text-gray-600 mt-4">Marshrut yaratilmoqda...</p>
          </div>
        )}

        {/* Qidiruv Natijalari */}
        {searchResult && !loading && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sizning shaxsiy marshrutingiz
            </h3>

            {/* Sayohat Xulosasi */}
            <div className="bg-[#F9C80E] bg-opacity-10 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Umumiy ma'lumot
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Oy</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.result.trip_summary.month}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Kunlar</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.result.trip_summary.duration_days}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Odamlar</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.result.trip_summary.group_numbers} kishi
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Guruh turi</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.result.trip_summary.group_type}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Umumiy narx</p>
                  <p className="text-lg font-bold text-gray-800">
                    ${searchResult.result.trip_summary.estimated_total_cost_usd}
                  </p>
                </div>
              </div>
              {searchResult.result.trip_summary.group_numbers > 1 && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Kishi boshiga:{" "}
                    <span className="font-semibold text-[#F9C80E]">
                      $
                      {Math.floor(
                        searchResult.result.trip_summary
                          .estimated_total_cost_usd /
                          searchResult.result.trip_summary.group_numbers
                      )}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Mehmonxona narxi */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">
                  Kunlik mehmonxona narxi (barcha ishtirokchilar uchun):
                </span>
                <span className="text-lg font-bold text-blue-600">
                  $
                  {searchResult.result.total_hotel_cost_day_usd_for_all_members}
                </span>
              </div>
            </div>

            {/* Kunlik Rejalar */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Kunlik reja
              </h4>
              {searchResult.result.daily_plan.map((day) => (
                <div
                  key={day.day}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-lg font-semibold text-gray-800">
                      {day.day}-kun
                    </h5>
                    <span className="text-sm text-gray-600">{day.date}</span>
                    <span className="text-sm font-semibold text-[#F9C80E]">
                      Kunlik jami: ${day.total_cost_day_usd}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {day.schedule.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100"
                      >
                        <div className="flex items-start space-x-4">
                          <span className="text-sm font-medium text-gray-500 w-16 shrink-0">
                            {activity.time}
                          </span>
                          <span className="text-gray-700">
                            {activity.activity}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-semibold text-[#F9C80E]">
                            ${activity.cost_usd}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Izohlar */}
            {searchResult.result.notes && (
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                  Muhim eslatmalar
                </h4>
                <p className="text-yellow-700">{searchResult.result.notes}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Welcome;
