import data from '../site.json';
import * as batch0 from './november02-blog';
import * as batch1 from './november02-research';
import * as batch2 from './november03-blog';
import * as batch3 from './november03-research';
import * as batch4 from './november05-blog';
import * as batch5 from './november05-research';
import * as batch6 from './november06-blog';
import * as batch7 from './november06-research';
import * as batch8 from './november07-blog';
import * as batch9 from './november07-research';
import * as batch10 from './november08-blog';
import * as batch11 from './november08-research';
import * as batch12 from './november09-blog';
import * as batch13 from './november09-research';
import * as batch14 from './november10-blog';
import * as batch15 from './november10-research';
import * as batch16 from './november11-blog';
import * as batch17 from './november11-research';
import * as batch18 from './november12-blog';
import * as batch19 from './november12-research';
import * as batch20 from './november16-blog';
import * as batch21 from './november16-research';
import * as batch22 from './november17-blog';
import * as batch23 from './november17-research';
import * as batch24 from './november18-blog';
import * as batch25 from './november18-research';
import * as batch26 from './november19-blog';
import * as batch27 from './november19-research';
import * as batch28 from './november20-blog';
import * as batch29 from './november20-research';
import * as batch30 from './november21-blog';
import * as batch31 from './november21-research';
import * as batch32 from './november22-blog';
import * as batch33 from './november22-research';
import * as batch34 from './november23-blog';
import * as batch35 from './november23-research';
import * as batch36 from './november24-blog';
import * as batch37 from './november24-research';
import * as batch38 from './october12';
import * as batch39 from './october12-blog';
import * as batch40 from './october12-research';
import * as batch41 from './october13';
import * as batch42 from './october13-blog';
import * as batch43 from './october13-research';
import * as batch44 from './october15-blog';
import * as batch45 from './october15-research';
import * as batch46 from './october16-blog';
import * as batch47 from './october22-blog';
import * as batch48 from './october22-research';
import * as batch49 from './october25-blog';
import * as batch50 from './october25-research';
import * as batch51 from './october26-blog';
import * as batch52 from './october26-research';
import * as batch53 from './october27-blog';
import * as batch54 from './october27-research';

// Retire the existing dated article batches. Git history preserves their content.
// New batch modules can be added without joining this archived inventory.
for (const batch of [batch0, batch1, batch2, batch3, batch4, batch5, batch6, batch7, batch8, batch9, batch10, batch11, batch12, batch13, batch14, batch15, batch16, batch17, batch18, batch19, batch20, batch21, batch22, batch23, batch24, batch25, batch26, batch27, batch28, batch29, batch30, batch31, batch32, batch33, batch34, batch35, batch36, batch37, batch38, batch39, batch40, batch41, batch42, batch43, batch44, batch45, batch46, batch47, batch48, batch49, batch50, batch51, batch52, batch53, batch54]) {
  for (const [name, value] of Object.entries(batch)) {
    if (Array.isArray(value)) value.splice(0);
    else if (value instanceof Map) value.clear();
    else if (/BySlug$/.test(name) && value && typeof value === "object") {
      for (const key of Object.keys(value)) delete (value as Record<string, unknown>)[key];
    }
  }
}
export const site = {...data, blog: [] as typeof data.blog, research: [] as typeof data.research};
