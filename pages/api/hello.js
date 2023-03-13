export default function Hello(req, res) {
  res.status(200).json({ text: "Hello" });
}