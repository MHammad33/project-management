import mongoose from "mongoose";
import { ProjectMember } from "../models/project-member.model.js";
import { Project } from "../models/project.model.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import { UserRolesEnum } from "../utils/constants.js";

const getProjects = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all projects
});

const getProjectById = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get a project by ID
});

const createProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const project = await Project.create({
    name,
    description,
    createdBy: new mongoose.Types.ObjectId(req.user._id),
  });

  await ProjectMember.create({
    user: new mongoose.Types.ObjectId(req.user._id),
    project: new mongoose.Types.ObjectId(project._id),
    role: UserRolesEnum.ADMIN,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, project, "Project created successfully"));
});

const updateProject = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const { projectId } = req.params;

  const project = await Project.findByIdAndUpdate(
    projectId,
    { name, description },
    { new: true },
  );

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, project, "Project updated successfully"));
});

const deleteProject = asyncHandler(async (req, res) => {
  // TODO: Implement logic to delete a project
});

const addMemberToProject = asyncHandler(async (req, res) => {
  // TODO: Implement logic to add a member to a project
});

const getProjectMembers = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get members of a project
});

const updateProjectMemberRole = asyncHandler(async (req, res) => {
  // TODO: Implement logic to update a member's role in a project
});

const removeMemberFromProject = asyncHandler(async (req, res) => {
  // TODO: Implement logic to remove a member from a project
});

export {
  addMemberToProject,
  createProject,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  removeMemberFromProject,
  updateProject,
  updateProjectMemberRole,
};
