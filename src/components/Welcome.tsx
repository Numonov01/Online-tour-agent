// src/components/Welcome.tsx
import { useState } from "react";

const Welcome = () => {
  const [userInput, setUserInput] = useState({
    age: "",
    gender: "",
    group_type: "",
    budget_usd: "",
    days: "",
    month: "",
    people_count: "",
    is_disabled: false,
  });

  const [searchResult, setSearchResult] = useState(null);

  const genders = [
    { value: "male", label: "Erkak" },
    { value: "female", label: "Ayol" },
    { value: "other", label: "Boshqa" },
  ];

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

    // Mock API call - keyinchalik backend bilan almashtiriladi
    const totalBudget = parseInt(userInput.budget_usd) || 180;
    const peopleCount = parseInt(userInput.people_count) || 1;
    const perPersonBudget = Math.floor(totalBudget / peopleCount);

    const mockResponse = {
      trip_summary: {
        city: "Samarqand",
        month: userInput.month || "Aprel",
        duration_days: parseInt(userInput.days) || 2,
        estimated_total_cost_usd: totalBudget,
        people_count: peopleCount,
        budget_per_person_usd: perPersonBudget,
      },
      daily_plan: [
        {
          day: 1,
          date: "2024-04-15",
          schedule: [
            {
              time: "08:00",
              activity: "Mahalliy kafeda nonushta",
              cost_usd: 8 * peopleCount,
              type: "food",
            },
            {
              time: "10:00",
              activity: "Registon maydoniga ekskursiya",
              cost_usd: 15 * peopleCount,
              type: "sightseeing",
            },
            {
              time: "13:00",
              activity: "Restoranda tushlik",
              cost_usd: 12 * peopleCount,
              type: "food",
            },
            {
              time: "15:00",
              activity: "Gur-Emir maqbarasiga tashrif",
              cost_usd: 10 * peopleCount,
              type: "sightseeing",
            },
            {
              time: "19:00",
              activity: "Kechki ovqat va folklor ko'rgazmasi",
              cost_usd: 25 * peopleCount,
              type: "entertainment",
            },
          ],
          total_cost_day_usd: 70 * peopleCount,
        },
        {
          day: 2,
          date: "2024-04-16",
          schedule: [
            {
              time: "09:00",
              activity: "Mehmonxonada nonushta",
              cost_usd: 0,
              type: "food",
            },
            {
              time: "11:00",
              activity: "Ulug'bek rasadxonasiga tashrif",
              cost_usd: 12 * peopleCount,
              type: "sightseeing",
            },
            {
              time: "14:00",
              activity: "Bozorda tushlik va xarid",
              cost_usd: 20 * peopleCount,
              type: "shopping",
            },
            {
              time: "17:00",
              activity: "Aeroportga transfer",
              cost_usd: 15 * peopleCount,
              type: "transport",
            },
          ],
          total_cost_day_usd: 47 * peopleCount,
        },
      ],
    };

    setSearchResult(mockResponse);
    console.log("Foydalanuvchi ma'lumotlari:", userInput);
    console.log("Qidiruv natijasi:", mockResponse);
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | number
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
            {/* Birinchi qator: Yosh, Jins, Guruh turi */}
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
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jins
                </label>
                <select
                  value={userInput.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                >
                  <option value="">Jinsni tanlang</option>
                  {genders.map((gender) => (
                    <option key={gender.value} value={gender.value}>
                      {gender.label}
                    </option>
                  ))}
                </select>
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
                >
                  <option value="">Guruh turini tanlang</option>
                  {groupTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ikkinchi qator: Odamlar soni, Byudjet, Kunlar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                />
              </div>

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
                  min="50"
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
                  max="30"
                />
              </div>
            </div>

            {/* Uchinchi qator: Oy va Qulayliklar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sayohat oyi
                </label>
                <select
                  value={userInput.month}
                  onChange={(e) => handleInputChange("month", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C80E] focus:border-transparent"
                >
                  <option value="">Oyni tanlang</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

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

            {/* Qidiruv Tugmasi */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#F9C80E] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#E0A800] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Sayohat marshrutini yaratish
              </button>
            </div>
          </form>
        </div>

        {/* Qidiruv Natijalari */}
        {searchResult && (
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
                  <p className="text-sm text-gray-600">Shahar</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.trip_summary.city}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Oy</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.trip_summary.month}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Kunlar</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.trip_summary.duration_days}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Odamlar</p>
                  <p className="text-lg font-bold text-gray-800">
                    {searchResult.trip_summary.people_count} kishi
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Umumiy narx</p>
                  <p className="text-lg font-bold text-gray-800">
                    ${searchResult.trip_summary.estimated_total_cost_usd}
                  </p>
                </div>
              </div>
              {searchResult.trip_summary.people_count > 1 && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Kishi boshiga:{" "}
                    <span className="font-semibold text-[#F9C80E]">
                      ${searchResult.trip_summary.budget_per_person_usd}
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* Kunlik Rejalar */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Kunlik reja
              </h4>
              {searchResult.daily_plan.map((day) => (
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
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-gray-500 w-16">
                            {activity.time}
                          </span>
                          <span className="text-gray-700">
                            {activity.activity}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-[#F9C80E]">
                            ${activity.cost_usd}
                          </span>
                          {searchResult.trip_summary.people_count > 1 &&
                            activity.cost_usd > 0 && (
                              <p className="text-xs text-gray-500">
                                ({searchResult.trip_summary.people_count} kishi
                                uchun)
                              </p>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Welcome;
