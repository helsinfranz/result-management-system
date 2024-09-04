import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json({ message: "Not authorized!" });
    return;
  }

  const { data } = req.body;

  if (!data || data.length === 0) {
    res.status(402).json({ message: "No data found in the file." });
    return;
  }

  if (!Array.isArray(data)) {
    res.status(403).json({ message: "Data must be an array." });
    return;
  }

  const trimmedData = [];

  Array.map(data, (item, index) => {
    trimmedData.push({
      student_id: item.student_id.trim(),
      marks: parseFloat(item.marks).toFixed(2),
    });
    if (
      !item.student_id ||
      !item.marks ||
      item.student_id.trim().length === 0
    ) {
      res
        .status(424)
        .json({ message: "Error: Invalid data on line " + (index + 1) + "." });
      return;
    }
  });

  const client = await connectToDatabase();
  const db = client.db();
  const collection = db.collection("students");

  try {
    // Use updateMany to update or insert documents in batch
    await collection.updateMany(
      { student_id: { $in: trimmedData.map((item) => item.student_id) } },
      {
        $set: trimmedData.map((item) => ({
          student_id: item.student_id,
          assessment_marks: item.marks,
        })),
      },
      { upsert: true }
    );

    res.status(200).json({ message: "Assessment Data uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating data" });
  } finally {
    await client.close();
  }
}
