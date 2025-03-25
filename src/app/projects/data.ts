//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type HighlightedProject = {
  title: string;
  description: string;
  linkText?: string;
  projectUrl?: string;
  logo?: string;
  storeUrl?: string;
  featured?: boolean;
};

export function getHighlightedProjects() {
  const dir = path.join(process.cwd(), '_projects');
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as HighlightedProject;
  });
}
