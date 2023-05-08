const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    ticket: {
      type: Number,
      unique: true,
      required: true,
      default: 500,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.pre("save", async function (next) {
  if (this.isNew) {
    const latestNote = await this.constructor
      .findOne({}, { ticket: 1 })
      .sort({ $natural: -1 });
    this.ticket = latestNote ? latestNote.ticket + 1 : 500;
  }
  next();
});

module.exports = mongoose.model("Note", noteSchema);
