export default function ReviewCard({ name, role, image, rating = 5, text }) {
    return (
      <div className="p-4 rounded-lg border border-[#b2b2b2]">
        <div className="flex items-center mb-3">
          <img
            src={image}
            alt={name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mr-3 object-cover"
          />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
            <div className="text-yellow-400 text-sm">
              {"★".repeat(rating)}<span className="text-gray-400">{"★".repeat(5 - rating)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    );
  }