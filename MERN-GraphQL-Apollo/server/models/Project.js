import mongoose from 'mongoose';
import Task from './Task.js';

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

ProjectSchema.pre('findOneAndDelete', async function () {
  const project = await this.model.findOne(this.getFilter());
  if (project) {
    await Task.deleteMany({ projectId: project._id });
  }
});

export default mongoose.model('Project', ProjectSchema);
